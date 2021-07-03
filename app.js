const app = Vue.createApp({
	data() {
		return {
			title: "Mr.",
			firstName: "John",
			lastName: "Doe",
			email: "john@gmail.com",
			number: "000-111-222",
			gender: "male",
			picture: "https://randomuser.me/api/portraits/men/10.jpg",
			city: "New York",
			country: "USA",
		};
	},
	methods: {
		async getUser() {
			const res = await fetch("https://randomuser.me/api");
			const { results } = await res.json();

			console.log(results);

			this.title = results[0].name.title;
			this.firstName = results[0].name.first;
			this.lastName = results[0].name.last;
			this.gender = results[0].gender;
			this.email = results[0].email;
			this.number = results[0].cell;
			this.picture = results[0].picture.large;
			this.city = results[0].location.city;
			this.country = results[0].location.country;
		},
	},
});

app.mount("#app");
