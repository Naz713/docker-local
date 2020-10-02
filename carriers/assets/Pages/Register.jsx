import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    carrier_id: Yup.number().min(0, "Seleccione un transportista"),
    other_carrier: Yup.string(),
    scac: Yup.string(),
    carrier_email: Yup.string().required("Este campo es obligatorio"),
    provider_id: Yup.number().min(0, "Seleccione un proveedor"),
    other_provider: Yup.string(),
    provider_email: Yup.string().required("Este campo es obligatorio"),
    provider_notes: Yup.string().required("Este campo es obligatorio")
});

const Register = () => {

    let initValues = {
        carrier_id: -1,
        other_carrier: "",
        scac: "",
        carrier_email: "",

        provider_id: -1,
        other_provider: "",
        provider_email: "",
        provider_notes: ""
    };

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values);
        },
        enableReinitialize: true
    });

    return (
        <div className="flex justify-center">
            <form action="#" className="w-full max-w-2xl" onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-12">
                    <div className="w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="carrier_id">
                            Transportista
                        </label>
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3
                            px-4 pr-8 leading-tight focus:outline-none focus:bg-white
                            focus:border-gray-500"
                            id="carrier_id"
                            name="carrier_id"
                            onChange={formik.handleChange}
                            value={formik.values.carrier_id}
                        >
                            <option value={-1}>&lt;Seleccione&gt;</option>
                            <option value={1} >New Mexico</option>
                            <option value={2} >Missouri</option>
                            <option value={999}>Otro</option>
                        </select>
                        {formik.touched.carrier_id && formik.errors.carrier_id ? <div className="text-red-600 text-sm">{formik.errors.carrier_id}</div> : null}
                    </div>
                    {
                        Number(formik.values.carrier_id) === 999 ? <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="otherScac">
                                Otro transportista
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="other_carrier"
                                name="other_carrier"
                                type="text"
                                placeholder="Escriba el nombre del transportista"
                                onChange={formik.handleChange}
                                value={formik.values.other_carrier}
                            />
                            {formik.touched.other_carrier && formik.errors.other_carrier ? <div className="text-red-600 text-sm">{formik.errors.other_carrier}</div> : null}
                        </div> : null
                    }
                    <div className="w-full px-3 flex justify-between">
                        <div className="w-1/4">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="scac">
                                SCAC
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="scac"
                                   name="scac"
                                   type="text"
                                   onChange={formik.handleChange}
                                   value={formik.values.scac}
                            />
                            {formik.touched.scac && formik.errors.scac ? <div className="text-red-600 text-sm">{formik.errors.scac}</div> : null}
                        </div>
                        <div className="w-2/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="carrierEmail">
                                Correo electrónico del transportista
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="carrier_email"
                                   name="carrier_email"
                                   type="text"
                                   onChange={formik.handleChange}
                                   value={formik.values.carrier_email}
                            />
                            {formik.touched.carrier_email && formik.errors.carrier_email ? <div className="text-red-600 text-sm">{formik.errors.carrier_email}</div> : null}
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap -mx-3 mt-12">
                    <div className="w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="provider">
                            Proveedor de GPS
                        </label>
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3
                            px-4 pr-8 leading-tight focus:outline-none focus:bg-white
                            focus:border-gray-500"
                            id="provider_id"
                            name="provider_id"
                            onChange={formik.handleChange}
                            value={formik.values.provider_id}
                        >
                                <option value="-1">&lt;Seleccione&gt;</option>
                                <option value="1" data-scac="A">A</option>
                                <option value="2" data-scac="B">B</option>
                                <option value="999">Otro</option>
                        </select>
                        {formik.touched.provider_id && formik.errors.provider_id ? <div className="text-red-600 text-sm">{formik.errors.provider_id}</div> : null}
                    </div>
                    {
                        Number(formik.values.provider_id) === 999 ? <div className="w-full px-3 mb-6 ">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="otherProvider">
                                Otro proveedor de GPS
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="other_provider"
                                   name="other_provider"
                                   type="text"
                                   onChange={formik.handleChange}
                                   value={formik.values.other_provider}
                            />
                            {formik.touched.other_provider && formik.errors.other_provider ? <div className="text-red-600 text-sm">{formik.errors.other_provider}</div> : null}
                        </div> : null
                    }
                    <div className="px-3 mb-6 w-2/3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="providerEmail">
                            Correo electrónico del proveedor
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               id="provider_email"
                               name="provider_email"
                               type="text"
                               onChange={formik.handleChange}
                               value={formik.values.provider_email}
                        />
                        {formik.touched.provider_email && formik.errors.provider_email ? <div className="text-red-600 text-sm">{formik.errors.provider_email}</div> : null}
                    </div>
                    <div className="w-full px-3 mb-6 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="providerNotes">
                            Notas
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                                py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               rows={6}
                               id="provider_notes"
                               name="provider_notes"
                               onChange={formik.handleChange}
                               value={formik.values.provider_notes}
                        />
                        {formik.touched.provider_notes && formik.errors.provider_notes ? <div className="text-red-600 text-sm">{formik.errors.provider_notes}</div> : null}
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button
                        className="w-2/12 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
                            hover:border-teal-700 text-sm border-4 text-white py-1 px-2 "
                        type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
};


ReactDOM.render(<Register />, document.getElementById('root'));