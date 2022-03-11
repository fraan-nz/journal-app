export const imageUpload = async (file) => {
	const cloudUrl = process.env.REACT_APP_cloudApi;

	const formData = new FormData();
	formData.append("upload_preset", "journal-app");
	formData.append("file", file);

	try {
		const response = await fetch(cloudUrl, {
			method: "POST",
			body: formData,
		});
		if (response.ok) {
			const cloudResp = await response.json();
			return cloudResp.secure_url;
		} else {
			throw await response.json();
		}
	} catch (error) {
		throw error;
	}
};
