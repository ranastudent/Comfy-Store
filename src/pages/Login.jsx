import { FromInput, SubmitBtn } from "../componets"
import { Form, Link } from "react-router-dom"

const Login = () => {
  return <section className="h-screen grid place-items-center">
    <Form method="post" className="card w-96 py-20 px-8 bg-base-100 shadow-2xl flex flex-col gap-y-4">
      <h4 className="text-center text-3xl font-bold">Login</h4>
      <FromInput
        type="email"
        label="email"
        name="identifier"
        defaultValue="text@text.com" />
      <FromInput
        type={"password"}
        label={"password"}
        name={"password"}
        defaultValue={"secret"}
      />
      <div className="mt-4 grid place-items-center w-full">
        <SubmitBtn
          text={"login"}
        />
      </div>
      <button type="submit" className="btn btn-secondary btn-block mt-4">
        Guest User
      </button>
      <p className="text-center mt-4">
        Not A Member Yet? <Link to={"/register"} className="ml-2 link link-hover link-primary capitalize">Register</Link>
      </p>
    </Form>
  </section>
}

export default Login
