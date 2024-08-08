const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contacts: []
		},
		actions: {

			addNewContact: (data) => {
				return fetch("https://playground.4geeks.com/contact/agendas/greizag/contacts", {
					method: "POST",
					body: JSON.stringify(data),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						console.log(response)
						if (response.ok) {
							return response.json()
						}
						throw new Error("Ocurrió un error agregando un nuevo contacto")
					})
					.then((data) => {
						console.log("Contacto creado: ", data)
						getAllContacts()
					})
					.catch((error) => error)
			},

			getAllContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/greizag/contacts")
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log("Data:", data)
						console.log(data.contacts)
						setStore({ contacts: data.contacts })
					})
					.catch((error) => {
						console.log(error)
					})
			},

			editContact: () => {

			},

			deleteContact: () => {

			}
		}
	};
};

export default getState;
