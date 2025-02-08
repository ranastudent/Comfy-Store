import { FromInput, SubmitBtn } from "../componets"
import { Form, Link } from "react-router-dom"

const Register = () => {
  return <section className="h-screen grid place-items-center">
    <Form method="POST" className="card w-96 p-7 bg-base-100 shadow-2xl flex flex-col gap-y-4">
      <h4 className="text-center text-3xl font-bold">Register</h4>
      <FromInput
        type={"text"}
        label={"userName"}
        name={"userName"}
        
      />
      <FromInput
        type={"email"}
        label={"email"}
        name={"email"}

      />
      <FromInput
        type={"password"}
        label={"password"}
        name={"password"}

      />
      <div className="mt-4">
        <SubmitBtn text={"Register"} />
      </div>
      <p className="text-center mt-4">
        Already a member? <Link to={"/login"} className="ml-2 link link-hover link-primary capitalize">login</Link>
      </p>
    </Form>

  </section>
}

export default Register
