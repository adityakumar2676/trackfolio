import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import { register } from "../auth/authService";
import { use, useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const result = register({
            name,
            email,
            password,
        });

        if (!result.success) {
            setError(result.message);
            return;
        }

        navigate("/dashboard");
    }

    return (
        <main className="register">
            <article className="register__card">
                <header className="register__header">
                    <Logo />
                    <h1 className="register__title">Create your account</h1>
                    <p className="register__description">
                        Start organizing your job search today
                    </p>
                </header>
            </article>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <label className="form__label">Full Name</label>

                    <input
                        id="name"
                        className="form__input"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setError("");
                        }}
                        required
                    />
                </div>

                <div className="form__group">
                    <label className="form__label">Email</label>

                    <input
                        id="email"
                        className="form__input"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                        required
                    />
                </div>

                <div className="form__group">
                    <label className="form__label">Password</label>

                    <input
                        id="password"
                        className="form__input"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError;
                        }}
                        required
                    />
                </div>

                <div className="form__group">
                    <label className="form__label">Confirm Password</label>

                    <input
                        id="confirmPassword"
                        className="form__input"
                        type="password"
                        placeholder="********"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setError("");
                        }}
                        required
                    />
                </div>

                {error && (
                    <p className="form__error" role="alert">
                        {error}
                    </p>
                )}

                <button type="submit" className="btn btn--primary">
                    Create Account
                </button>

                <div className="form__footer">
                    <p>Already have an account?</p>
                    <Link to="/login">Log In</Link>
                </div>
            </form>
        </main>
    );
}

export default Register;
