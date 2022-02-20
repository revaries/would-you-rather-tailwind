import { useState } from 'react';
import reactReduxImage from '../assets/images/reactredux.png';
import authenticationService from '../services/authentication';

const DEFAULT = "default";

function LoginForm() {

    const [loginValue, setLoginValue] = useState(DEFAULT);
    const values = [
        {
            id: "JohnDoe",
            name: "John Doe"
        },
        {
            id: "TylerSoemthing",
            name: "Tyler Something"
        },
        {
            id: "testingTesting",
            name: "testing Testing"
        },
        {
            id: "RevanthPenugonda",
            name: "Revanth Penugonda"
        },
        {
            id: "RevanthPenugonda",
            name: "Revanth Penugonda"
        },
        {
            id: "FromMap",
            name: "From Map"
        }
    ]

    function handleSubmit() {
        if (loginValue === DEFAULT) {
            return alert("Please select a account to Login");
        }
        authenticationService.login(loginValue);
    }

    return (
        <div className="mx-4 space-y-8 mt-4 border p-2 border-gray-400 rounded">
            <div className="text-center bg-indigo-300 border-indigo-200 py-3 px-3 text-white rounded">
                Welcome to Would you rather App
        </div>
            <img src={reactReduxImage} alt="React Redux" className="w-56 h-28 mx-auto" />
            <form className="space-y-8">
                <select
                    value={loginValue}
                    onChange={event => {
                        setLoginValue(event.target.value)
                    }}
                    name="login-form"
                    id="login-form"
                    className="block appearance-none w-full bg-white border border-indigo-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="default">Select Account to Login</option>
                    {
                        values.map(eachValue => 
                            <option
                            value={eachValue.id}>
                            {eachValue.name}
                            </option>
                        )
                    }
                </select>
                <input type="submit" value="submit" onClick={handleSubmit} className="bg-indigo-500 text-center text-white px-5 py-3 w-full rounded" />
            </form>
        </div>
    )
}

export default LoginForm;