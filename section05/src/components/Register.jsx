import {useState, useRef} from 'react';
// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register = () => {
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    const [input, setInput] = useState({
        name :"",
        birth:"",
        country:"",
        bio:""
    });

    /*
    const onChangeName = (e) =>{
        // setName(e.target.value);
        setInput({
            ...input,
            name: e.target.value
        })
    };
    const onChangeBirth = (e) =>{
        // setBirth(e.target.value);
        setInput({
            ...input,
            birth: e.target.value
        })
    };
    const onChangeCountry = (e) =>{
        // setCountry(e.target.value);
        setInput({
            ...input,
            country: e.target.value
        })
    };
    const onChangeBio = (e) =>{
        // setBio(e.target.value);
        setInput({
            ...input,
            bio: e.target.value
        })
    };
    */
    const countRef = useRef(0);
    const inputRef = useRef(0);

    // 더 짧게 코드 사용하기
    const onChange = (e) =>{
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    };
    console.log(input);

    const onSubmit=()=>{
        if(input.name ===""){
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }
    return (
        <div>
          
            <div>
                <input 
                    ref = {inputRef} 
                    name="name"
                    // value={name}
                    value ={input.name}
                    // onChange ={onChangeName}
                    onChange={onChange}
                    placeholder = {"이름"} />
                {/* {name} */}
            </div>
            
            <div>
                <input type="date" 
                    name="birth"
                    // value={birth} 
                    value ={input.birth}
                    // onChange={onChangeBirth}
                    onChange={onChange} />
            </div>
            <div>
                <select 
                    name="country"
                //  value={country}
                 value ={input.country}
                //  onChange={onChangeCountry}
                 onChange={onChange}>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea 
                    name="bio"
                    // value={bio} 
                    value ={input.bio}
                    // onChange={onChangeBio} 
                    onChange={onChange} />
            </div>

            <button onClick={onSubmit}>submit</button>
        </div>

    )
};

export default Register;