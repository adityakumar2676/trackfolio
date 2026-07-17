import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const isValidLogin =
            email === "admin@trackfolio.com" && password === "123456";

        if (!isValidLogin) {
            setError("Invalid email or password");
            return;
        }

        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
    }

    return (
        <main className="login">
            <article className="login__card">
                <header className="login__header">
                    <h1 className="login__title">Welcome Back</h1>
                    <p className="login__description">
                        Log in to continue tracking your applications.
                    </p>
                </header>

                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__input-wrapper">
                        <label htmlFor="email" className="login__form-title">
                            Email
                        </label>
                        <input
                            id="email"
                            className="login__form-input"
                            type="email"
                            placeholder="you@example.com"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError("");
                            }}
                            required
                        />
                    </div>

                    <div className="login__input-wrapper">
                        <label htmlFor="password" className="login__form-title">
                            Password
                        </label>

                        <div className="login__password-wrapper">
                            <input
                                id="password"
                                className="login__form-input"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                required
                            />

                            <button
                                type="button"
                                className="login__password-toggle"
                                onClick={() => setShowPassword((prev) => !prev)}
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff
                                        size={18}
                                        className="password__toggle-icon"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <Eye
                                        size={18}
                                        className="password__toggle-icon"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="login__error" role="alert">
                            {error}
                        </p>
                    )}

                    <button type="submit" className="btn login__submit-btn">
                        Log In
                    </button>
                </form>
            </article>
        </main>
    );
}

export default Login;
