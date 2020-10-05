import $ from "jquery";

export const doAjaxPost = async (url, formData) => {
    let result = await $.ajax({
        url: url,
        type: "POST",
        processData: false,  // tell jQuery not to process the data
        contentType: false,
        data: formData,
    });

    return result;
};