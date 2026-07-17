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

        if (email === "admin@trackfolio.com" && password === "123456") {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid email or password");
        }
    }
    return (
        <main className="login">
            <article className="login__card">
                <header className="login__header">
                    <div className="login__card-icon__wrapper">
                        <img
                            src="#"
                            alt="Trackfolio"
                            className="login__card-icon"
                        />
                    </div>
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
                            onChange={(e) => setEmail(e.target.value)}
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
                                placeholder="********"
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                    />
                                ) : (
                                    <Eye
                                        size={18}
                                        className="password__toggle-icon"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="login__options">
                        <label className="login__checkbox">
                            <input
                                type="checkbox"
                                className="login__checkbox-input"
                            />

                            <span className="login__checkbox-box"></span>

                            <span className="login__checkbox-text">
                                Remember me
                            </span>
                        </label>

                        <a href="#" className="login__forgot-password">
                            Forgot password?
                        </a>
                    </div>

                    {error && <p className="login__error">{error}</p>}

                    <button type="submit" className="btn login__submit-btn">
                        Log In
                    </button>

                    <div className="login__divider">
                        <span className="divider__line"></span>
                        <div className="divider__text-wrapper">
                            <span className="divider__text">OR</span>
                        </div>
                        <span className="divider__line"></span>
                    </div>

                    <button
                        type="button"
                        className="btn login__social-button login__social-button--google"
                    >
                        <img
                            src=""
                            alt="Google"
                            className="login__social-icon"
                        />
                        <span className="login__social-label">
                            Continue with Google
                        </span>
                    </button>

                    <button
                        type="button"
                        className="btn login__social-button login__social-button--github"
                    >
                        <img
                            src=""
                            alt="Github"
                            className="login__social-icon"
                        />
                        <span className="login__social-label">
                            Continue with github
                        </span>
                    </button>

                    <p className="login__footer">
                        Don't have an account? <a href="#">Sign Up</a>
                    </p>
                </form>
            </article>
        </main>
    );
}

export default Login;
