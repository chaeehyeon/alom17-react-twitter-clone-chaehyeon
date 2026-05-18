import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Error, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import { Form, Link } from "react-router-dom";

export default function ResetPassword(){
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");
    const [message, setMessage]=useState("");
    const [isLoading,setLoading]=useState(false);

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || email === "") return;

    try {
      setLoading(true);
      setError("");
      setMessage("");

      await sendPasswordResetEmail(auth, email);

      setMessage("Password reset email sent!");
    } catch (e) {
      console.log(e);
      setError("Failed to send password reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Reset Password</Title>

      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={email}
          placeholder="Email"
          type="email"
          required
        />

        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Send Reset Email"}
        />
      </Form>

      {error !== "" ? <Error>{error}</Error> : null}
      {message !== "" ? <span>{message}</span> : null}

      <Switcher>
        Remember password? <Link to="/login">Log in</Link>
      </Switcher>
    </Wrapper>
  );
}