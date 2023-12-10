import React from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	return (
		<div className="bg-blue-50 w-screen h-screen flex items-center">
			<form className="w-1/2 m-auto">
				<h1>Register</h1>
				<input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
					className="block w-full rounded-sm p-2 mb-2 border"
					type="text"
					placeholder="username"
				/>
				<input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
					className="block w-full rounded-sm p-2 mb-2 border"
					type="email"
					placeholder="email"
				/>
				<input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
					className="block w-full rounded-sm p-2 mb-2 border"
					type="password"
					placeholder="password"
				/>
				<input
                    
					className="block w-full rounded-sm p-2 mb-2 border"
					type="password"
					placeholder="confirm password"
				/>
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
			</form>
		</div>
	);
};

export default Register;
