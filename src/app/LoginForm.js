import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reactReduxImage from '../assets/images/reactredux.png';
import { LOGIN_USER } from '../redux/reducers/actions';
import authenticationService from '../services/authentication';

const DEFAULT = "default";

function LoginForm() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const userKeys = Object.keys(users);

    const [loginValue, setLoginValue] = useState(DEFAULT);

    function handleSubmit() {
        if (loginValue === DEFAULT) {
            return alert("Please select a account to Login");
        }
        console.log("Login Value: ", loginValue);
        authenticationService.login(loginValue);
        dispatch({
            type: LOGIN_USER,
            payload: loginValue
        });
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
                        userKeys.map(key => <option key={key} value={key}>{users[key].name}</option>)
                    }
                </select>
                <input type="submit" value="submit" onClick={handleSubmit} className="bg-indigo-500 text-center text-white px-5 py-3 w-full rounded" />
            </form>
        </div>
    )
}

export default LoginForm;