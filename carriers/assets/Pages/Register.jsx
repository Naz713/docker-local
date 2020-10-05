import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';
import $ from 'jquery';
import { doAjaxPost } from "../utilities";
import loaderGif from '../images/loading-gif.gif';

const formSchema = Yup.object().shape({
    carrier_id: Yup.number().min(0, "Seleccione un transportista").required("Este campo es obligatorio"),
    other_carrier: Yup.string(),
    scac: Yup.string().max(10, ""),
    carrier_email: Yup.string().email("El correo no es válido").required("Este campo es obligatorio"),
    provider_id: Yup.number().min(0, "Seleccione un proveedor").required("Este campo es obligatorio"),
    other_provider: Yup.string(),
    provider_email: Yup.string().email("El correo no es válido").required("Este campo es obligatorio"),
    provider_notes: Yup.string()
});

const labels = {
    mx: {
        carrier: "Transportista",
        scac: "SCAC",
        other_carrier: "Nombre del transportista",
        carrier_email: "Correo electrónico del transportista",
        provider: "Proveedor de GPS",
        other_provider: "Nombre del proveedor de GPS",
        provider_email: "Correo electrónico del proveedor",
        notes: "Notas",
        send: "Enviar",
        other: "Otro",
        select: "Seleccione"
    },
    us: {
        carrier: "Carrier",
        scac: "SCAC",
        other_carrier: "Carrier",
        carrier_email: "Email carrier",
        provider: "GPS Provider",
        other_provider: "GPS privder",
        provider_email: "Email provider",
        notes: "Notes",
        send: "Send",
        other: "Other",
        select: "Choose"
    }
};

const init = {
    carrier_id: -1,
    other_carrier: "",
    scac: "",
    carrier_email: "",
    provider_id: -1,
    other_provider: "",
    provider_email: "",
    provider_notes: ""
};

const Register = () => {
    const [providers, setProviders] = useState([]);
    const [carriers, setCarriers] = useState([]);
    const [traduction, setTraduction] = useState(labels.mx);
    const [initValues, setInitValues] = useState(init);
    const [loading, setLoading] = useState(false);

    const getFfs = async () => {
        let url = $("#getFf").val();
        let result = await doAjaxPost(url, {});
        return !result.error && result.data ;
    };

    useEffect(() => {
        let local = $("#local").val();
        let isSubscribed = true;
        const getData = async() => {

            if (isSubscribed) {
                let response = await getFfs();
                if(response) {
                    let {carriers, providers} = response;
                    setProviders(providers);
                    setCarriers(carriers);
                }

            }
        };
        getData();

        setTraduction(labels[local]);

        return () => {
            isSubscribed = false
        }
    }, []);

    const onSubmit = async (values) => {
        setLoading(true);
        let url = $("#sendInfoUrl").val();
        let origin = $("#origin").val();

        let formData = new FormData();
        formData.append("carrier_id", Number(values.carrier_id) === 999 ? "" : values.carrier_id);
        formData.append("carrier_name", values.other_carrier);
        formData.append("carrier_email", values.carrier_email);
        formData.append("scac", values.scac);
        formData.append("provider_id", Number(values.provider_id) === 999 ? "" : values.provider_id);
        formData.append("provider_name", values.other_provider);
        formData.append("provider_email", values.provider_email);
        formData.append("notes", values.provider_notes);
        formData.append("origin", origin);

        let response = await doAjaxPost(url, formData);

        if(response.code === 400) {
            alert(response.msg);
        }else {
            alert("Se realizó el registro correctamente");
            setInitValues(init);
        }
        setLoading(false);
    };

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: formSchema,
        onSubmit: onSubmit,
        enableReinitialize: true
    });

    return (
        <div className="flex justify-center">
            <form action="#" className="w-full max-w-2xl" onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-12">
                    <div className="w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="carrier_id">
                            { traduction.carrier }
                        </label>
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3
                            px-4 pr-8 leading-tight focus:outline-none focus:bg-white
                            focus:border-gray-500"
                            id="carrier_id"
                            name="carrier_id"
                            onBlur={formik.handleBlur}
                            onChange={(ev) => {
                                formik.handleChange(ev);

                                let {target} = ev;
                                let {value} = target;
                                let carrierSelected = carriers.find(carrier => carrier.id === value);

                                setInitValues(Object.assign({}, formik.values, {
                                    scac: carrierSelected ? carrierSelected.scac : '',
                                    carrier_id: value
                                }));

                            }}
                            value={formik.values.carrier_id}
                        >
                            <option value={-1}>&lt;{traduction.select}&gt;</option>
                            <option value={999}>[{traduction.other}]</option>
                            {
                                carriers.map((carrier, index) => {
                                    return <option value={carrier.id} key={index}>{carrier.name}</option>
                                })
                            }
                        </select>

                        {formik.touched.carrier_id && formik.errors.carrier_id ? <div className="text-red-600 text-sm">{formik.errors.carrier_id}</div> : null}
                    </div>
                    {
                        Number(formik.values.carrier_id) === 999 ? <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="otherScac">
                                { traduction.other_carrier }
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="other_carrier"
                                name="other_carrier"
                                type="text"
                                maxLength={100}
                                placeholder="Escriba el nombre del transportista"
                                onChange={formik.handleChange}
                                value={formik.values.other_carrier}
                               onBlur={formik.handleBlur}
                            />
                            {formik.touched.other_carrier && formik.errors.other_carrier ? <div className="text-red-600 text-sm">{formik.errors.other_carrier}</div> : null}
                        </div> : null
                    }
                    <div className="w-full px-3 flex justify-between">
                        <div className="w-1/4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="scac">
                                { traduction.scac }
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="scac"
                                   name="scac"
                                   type="text"
                                   maxLength={10}
                                   onChange={formik.handleChange}
                                   value={formik.values.scac}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.scac && formik.errors.scac ? <div className="text-red-600 text-sm">{formik.errors.scac}</div> : null}
                        </div>
                        <div className="w-2/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="carrierEmail">
                                { traduction.carrier_email }
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="carrier_email"
                                   name="carrier_email"
                                   type="text"
                                   maxLength={50}
                                   onChange={formik.handleChange}
                                   value={formik.values.carrier_email}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.carrier_email && formik.errors.carrier_email ? <div className="text-red-600 text-sm">{formik.errors.carrier_email}</div> : null}
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap -mx-3 mt-12">
                    <div className="w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="provider">
                            { traduction.provider }
                        </label>
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3
                            px-4 pr-8 leading-tight focus:outline-none focus:bg-white
                            focus:border-gray-500"
                            id="provider_id"
                            name="provider_id"
                            onChange={formik.handleChange}
                            value={formik.values.provider_id}
                            onBlur={formik.handleBlur}
                        >
                            <option value={-1}>&lt;{traduction.select}&gt;</option>
                            <option value={999}>[{traduction.other}]</option>
                            {
                                providers.map((provider, index) => {
                                    return <option value={provider.id} key={index} >{provider.name}</option>
                                })
                            }
                        </select>
                        {formik.touched.provider_id && formik.errors.provider_id ? <div className="text-red-600 text-sm">{formik.errors.provider_id}</div> : null}
                    </div>
                    {
                        Number(formik.values.provider_id) === 999 ? <div className="w-full px-3 mb-6 ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="otherProvider">
                                { traduction.other_provider }
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="other_provider"
                                   name="other_provider"
                                   type="text"
                                   maxLength={100}
                                   onChange={formik.handleChange}
                                   value={formik.values.other_provider}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.touched.other_provider && formik.errors.other_provider ? <div className="text-red-600 text-sm">{formik.errors.other_provider}</div> : null}
                        </div> : null
                    }
                    <div className="px-3 mb-6 w-2/3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="providerEmail">
                            { traduction.provider_email }
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="provider_email"
                               name="provider_email"
                               type="text"
                               maxLength={50}
                               onChange={formik.handleChange}
                               value={formik.values.provider_email}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.provider_email && formik.errors.provider_email ? <div className="text-red-600 text-sm">{formik.errors.provider_email}</div> : null}
                    </div>
                    <div className="w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="providerNotes">
                            { traduction.notes }
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               rows={6}
                               id="provider_notes"
                               name="provider_notes"
                               maxLength={256}
                               onChange={formik.handleChange}
                               value={formik.values.provider_notes}
                               onBlur={formik.handleBlur}
                        />
                        {formik.touched.provider_notes && formik.errors.provider_notes ? <div className="text-red-600 text-sm">{formik.errors.provider_notes}</div> : null}
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        className="w-2/12 flex-shrink-0 bg-teal-500 hover:bg-teal-700 bg-green-til-2
                            hover:border-teal-700 text-sm border-1 text-white py-1 px-2 "
                        type="submit"
                        disabled={loading}
                    >
                        { traduction.send }
                    </button>
                </div>
            </form>
            {
                loading ? <div className="absolute flex justify-center items-center w-full h-full" >
                    <img src={loaderGif} alt="" className="w-10 h-10"/>
                </div> : null
            }
        </div>
    )
};


ReactDOM.render(<Register />, document.getElementById('root'));