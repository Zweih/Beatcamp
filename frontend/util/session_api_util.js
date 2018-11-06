// User Requests

export const signup = (user) => {
	return $.ajax({
		method: "POST",
		url: "api/users",
		data: {
			user,
		},
	});
};

export const fetchUsers = () => {
	return $.ajax({
		method: "GET",
		url: "api/users",
	});
};

export const fetchUser = (userId) => {
	return $.ajax({
		method: "GET",
		url: `api/users/${userId}`,
	});
};

export const updateUser = (user) => {
	return $.ajax({
		method: "PATCH",
		url: `api/users/${user.userId}`,
		data: {
			user,
		},
	});
};

// Session Requests

export const login = (user) => {
	return $.ajax({
		method: "POST",
		url: "api/session",
		data: {
			user,
		}
	});
};


export const logout = () => {
	return $.ajax({
		method: "DELETE",
		url: "api/session",
	});
};
