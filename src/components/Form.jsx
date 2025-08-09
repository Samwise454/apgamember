import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const Form = () => {
    const url = 'https://apga.esbatech.org/form.php';

    const [btnContent, setBtnContent] = useState("Submit");
    const [btnClass, setBtnClass] = useState("bg-gradient-to-b from-yellow-600 to-black px-6 py-3 text-white rounded-md cursor-pointer outline-none border-none");
    const badSubmit = "bg-red-600 px-6 py-3 text-white rounded-md cursor-pointer";
    const [defRes, setDefRes] = useState('mt-6 text-black text-center hidden');
    const errorResClass = useState('mt-6 text-red-600 text-center');
    const sucResClass = useState('mt-6 text-black hidden');
    const [resCont, setResCont] = useState("");
    const [who, setWho] = useState(localStorage.getItem("apga"));
    let [pollWards, setPollWards] = useState([]);
    let [allBanks, setAllBanks] = useState([]);
    const [formInput, setFormInput] = useState({
        // title: "",
        gender: "",
        surname: "",
        firstname: "",
        middlename: "",
        dob: "",
        tel: "",
        lga: "",
        ward: "",
        // vinNum: "",
        job: "",
        address: "",
        acctName: "",
        bankName: "",
        acctNum: "",
        tCode: ""
    });
    const [imgFile, setImgFile] = useState({});
    const navigate = useNavigate();

    const [anyImg, setAnyImg] = useState(false);

    //let's get the session data 
    useEffect(() => {
        if (who == null) {
            navigate("/");
        }
        else {
            setFormInput({...formInput, tCode : who}); 
            
            //set the form details
            let allWards = `
                33|Prisons|Abacha|ABAGANA I|ABAGANA II|ABAGANA III|ABAGANA IV|Abatete|ABBA I|ABBA II|Abegbu/Iyiorah|Achalla I|Achalla II|Achalla III|Achina I|Achina II|Adazi Ani I|Adazi Ani II|Adazi Enu I|Adazi Enu II|Adazi Nnukwu I|Adazi Nnukwu II|AGBUDU|Aguleri I|Aguleri II||Agulu Ezechukwu|Agulu IAgulu II|Agulu III|Agulu IV|Aguluizigbo|AJALLI I (OBINIKPA)|AJALLI II (UMUABIAM) | AkiliOgidi/ Obeagwe |Akili Ozizo |Akpo |AKPU |Akwa |Akwaeze |AKWAIHEDI |Akwukwu |Alor 1 |Alor 2 |AMAETITI|Amakwa|Amamu 1|Amamu 2|Amansea|Amanuke |AMAOKPALA OMOGHO|Amawbia I|Amawbia II|Amawbia III|American quarters|Amesi|AMICHI I|AMICHI II|AMICHI III| Amorka| Anaku |Atani 1|Atani 2|AWA|Awba –Ofemili|AWGBU I|AWGBU II|Awka I|Awka II|Awka III|Awka IV|Awka V|Awka VI|Awka VII|Awka VIII|Awka-Etiti 1|Awka-Etiti 2|Awkuzu 1|Awkuzu 2|Awkuzu 3|Awkuzu 4|Azia|AZUIGBO|BRIDGEHEAD 1|BRIDGEHEAD 2|BRIDGEHEAD 3|EBENATOR|Ebenebe I|Ebenebe II|Ebenebe III|EKWULUMILI|Ekwuluobia I|Ekwuluobia II|Enugu out|ENUGU UMUONYIA|ENUGWU AGIDI I|ENUGWU AGIDI II|ENUGWU UKWU I|ENUGWU UKWU II|ENUGWU UKWU III|ENUGWU UKWU IV|Ezi Anam|EZIAGU|Eziagulu Out|Ezinifite I|EZINIFITE I|Ezinifite II|EZINIFITE II|EZINIFITE III|Eziowele|EZIRA|FEGGE 2|FEGGE 3|FEGGE 4|FEGGE 5|FEGGE 6|FEGGE 7|Fegge1| GRA|Ichi|Ichida I|Ichida II|Ideani|Ifite Ogwari ward 1|Ifite Ogwari ward 2|Ifitedunu1|Ifitedunu2|Igbakwuward|Igbariam| Igboukwu I|Igboukwu II|Ihembosi/Anaubahu|Ihite|IHITE|Ihiteoha|Ikenga|Inland Town 1|Inland Town 2Inland Town 3|Inland Town 4|Inland Town 5|Inland Town 6|Inland Town 7|Inland Town 8|Isiagu Ezinator|Isseke|Isuaniocha ward|ISULO|Isuofia|Iyiowa/Odekpe/Ohita|Lilu|Mbaukwu|Mbosi|Mgbakwu ward|Mkpologwu|Mmiata ward|Nando I|Nando II|Nando III|NANKA I|NANKA II|NAWFIA I|NAWFIA II|NAWFIJA|Nawgu 1|Nawgu 2|NDI OKPALAEZE|NDIKELIONWU|NDIOKOLO NDIOKPALEKE|NDIOWU|NDIUKWUENU OKPEZE|Neni I|Neni II|Nibo I|Nibo II|Nibo III|NIMO I|NIMO II|NIMO III|NIMO IV|Nise I|Nise II|NKEREHI| Nkpor 1|Nkpor 2|Nkwelle Ezunaka 1|Nkwelle Ezunaka 2|Nnewi-Ichi 1|Nnewi-Ichi 2|Nnobi 1|Nnobi 2|Nnobi 3|Nnokwa|Nri I|Nri II|Nsugbe I|Nsugbe II|Nteje 1|Nteje 2|Nteje 3|Nteje 4|Nteje 5|Nzam ward|Oba 1|Oba 2|Obeledu|Obosi|Ochuche-Umudu|ODOAKPU 1|ODOAKPU 2|ODOAKPU 3|ODOAKPU 4|ODOAKPU 5|ODOAKPU 6|ODOAKPU 7|ogbeumuonisha 1|ogbeumuonisha 2|OGBOJI|Ogbolo|Ogbunike 1|Ogbunike 2|OGBUNKA I|OGBUNKA II|Ogidi 1|Ogidi 2|Ogwu Aniocha|Ogwu Ikpele|Ojoto|Okija 1|Okija 2|Okija 3|Okija 4|Okija 5|OKO I|OKO II|Okpoko 1|Okpoko 2|Okpoko 3|Okpoko 4|Okpoko 5|Okpoko 6|Okpuno| Olumbanasa Inoma|Olumbanasa Ode|Omasi|Omor ward 1|Omor ward 2|Omor ward 3|Ora-Eri|Oraifite 1|Oraifite 2|Oraifite 3|Oraukwu|Oroma Etiti|Orsumoghu|Osamala|OSUMENYI I|OSUMENYI II|Otolo 1|Otolo 2|Otolo 3|Otuocha  II|Otuocha I|OWERRE-EZUKALA I|OWERRE-EZUKALA II|Ozubulu 1|Ozubulu 2|Ozubulu 3|Ozubulu 4|Ozubulu 5|Ubuluisiuzo|UFUMA I|UFUMA II|Uga I|Uga II|Ugbene ward|Ugbenu ward|Uke|Ukpo 1|Ukpo 2|Ukpo 3|UKPOR I|UKPOR II|UKPOR III|UKPOR IV|UKPOR V|UKPOR VI|Ukwulu I|Ukwulu II|Uli 1|Uli 2|Uli 3|Umuawulu|Umuchu 1|Umuchu II|Umudim 1|Umudim 2|Umudioka I|Umudioka II|Umueje ward|Umueri I|Umueri II|Umuerum ward|Umuewelum|Umueze Anam ward 1|Umueze Anam ward 2|Umumbo ward|Umunankwo/Mputu|Umunnachi I|Umunnachi II|Umunya 1|Umunya 2|UMUNZE I|UMUNZE II|UMUNZE III|umuoba |Umuoji|UMUOMAKU|Umuona|UNUBIUruagu 1|Uruagu 2|Uruagu 3|Urum ward|UTUH|Uzoakwa|waterside/GPO|woliwo
            `;

            let wardArray = allWards.split("|");
            //sorted wardArray
            let sortedWards = [];
            wardArray.forEach((data) => {
                data = data.toLowerCase();
                let newData = data.charAt(0).toUpperCase() + data.slice(1);
                sortedWards.push(newData);
            });
            setPollWards(sortedWards);

            let banks = `
                ACCESS BANK|ACCION MICROFINANCE BANK|AFRIBANK|ASO SAVINGS AND LOANS|CITIBANK NIGERIA LIMITED|ECOBANK|FCMB|FIDELITY BANK|FIRST BANK|GLOBUS BANK|GUARANTY TRUST BANK|HERITAGE BANK|INTERCONTINENTAL BANK|KEYSTONE BANK|KONGAPAY|KUDA MICROFINANCE|LOTUS BANK|MONIEPOINT MICROFINANCE|NIRSAL MICROFINANCE|OLUCHUKWU MICROFINANCE|OPAY|OPTIMUS BANK|PAGA|PALMPAY|PARALLEX BANK LIMITED|POLARIS BANK|PREMIUM TRUST BANK|PROVIDUS BANK|RELIANCE MFB|STANBIC IBTC|STANDARD CHARTERED NIGERIA|STERLING BANK|SUNTRUST BANK|TAJBANK|TITAN TRUST BANK|UNION BANK|UNITED BANK FOR AFRICA|UNITY BANK|WEMA BANK|ZENITH BANK
            `;

            let splitBanks = banks.split("|");
            let sortedBanks = [];
            splitBanks.forEach((data) => {
                sortedBanks.push(data);
            });
            setAllBanks(sortedBanks);
        }
    }, [])

    const handleFormInput = (e) => {
        let formId = e.target.id;
        let formValue = e.target.value;

        switch(formId) {
            // case "ntitle": 
            //     setFormInput({...formInput, title : formValue});
            //     break;
            case "fname": 
                setFormInput({...formInput, firstname : formValue});
                break;
            case "mname":
                setFormInput({...formInput, middlename : formValue});
                break;
            case "sname":
                setFormInput({...formInput, surname : formValue});
                break;
            case "tel":
                setFormInput({...formInput, tel : formValue});
                break;
            case "address":
                setFormInput({...formInput, address : formValue});
                break;
            case "dob":
                setFormInput({...formInput, dob : formValue});
                break;
            case "lga":
                setFormInput({...formInput, lga : formValue});
                break;
            case "ward":
                setFormInput({...formInput, ward : formValue});
                break;
            // case "vin":
            //     setFormInput({...formInput, vinNum : formValue});
            //     break;
            case "occupation":
                setFormInput({...formInput, job : formValue});
                break;
            case "acct":
                setFormInput({...formInput, acctName : formValue});
                break;
            case "bank":
                setFormInput({...formInput, bankName : formValue});
                break;
            case "acctNum":
                setFormInput({...formInput, acctNum : formValue});
                break;
        }
    }

    const handleGender = (e) => {
        let gender = e.target.id;
        setFormInput({...formInput, gender : gender});
    }

    const handleImage = (e) => {
        let imgFormData = new FormData();

        let imgFile = document.querySelector("#imgData");

        let fileData = imgFile.files[0];

        imgFormData.append('image', fileData);
        imgFormData.append('who', who);
        imgFormData.append('tData', 
            // formInput.title+"~"+
            formInput.firstname+"~"+
            formInput.middlename+"~"+
            formInput.surname+"~"+
            formInput.tel+"~"+
            formInput.gender+"~"+
            formInput.address+"~"+
            formInput.dob+"~"+
            formInput.ward+"~"+
            // formInput.vinNum+"~"+
            formInput.job+"~"+
            formInput.acctName+"~"+
            formInput.bankName+"~"+
            formInput.acctNum+"~"+
            formInput.lga
            );
        setImgFile(imgFormData);
        setAnyImg(true);
    }

    const handleFormError = (msg) => {
        setResCont(msg);
        setDefRes(errorResClass);
        setTimeout(() => {
            setDefRes(defRes);
        }, 5000);
    }

    const handleForm = (e) => {
        e.preventDefault();
        let loader = document.querySelector("#loader2");

        const hide_loader = () => {
            loader.style.display = "none";
        }
        loader.style.display = "flex";

        let genderArray = ["male", "female"];

        let imgFormData = new FormData();
        if (anyImg === false) {
            //means user didn't upload image
            imgFormData.append('image', "");
            imgFormData.append('who', who);
            imgFormData.append('tData', 
                // formInput.title+"~"+
                formInput.firstname+"~"+
                formInput.middlename+"~"+
                formInput.surname+"~"+
                formInput.tel+"~"+
                formInput.gender+"~"+
                formInput.address+"~"+
                formInput.dob+"~"+
                formInput.ward+"~"+
                // formInput.vinNum+"~"+
                formInput.job+"~"+
                formInput.acctName+"~"+
                formInput.bankName+"~"+
                formInput.acctNum+"~"+
                formInput.lga
                );
        }

        if (//formInput.title.length == 0 ||
            formInput.firstname.length == 0 ||
            formInput.middlename.length == 0 ||
            formInput.surname.length == 0 ||
            formInput.tel.length == 0 ||
            formInput.gender.length == 0 ||
            formInput.address.length == 0 ||
            formInput.dob.length == 0 ||
            formInput.lga.length == 0 ||
            formInput.ward.length == 0 ||
            // formInput.vinNum.length == 0 ||
            formInput.job.length == 0 ||
            formInput.acctName.length == 0 ||
            formInput.bankName.length == 0 ||
            formInput.acctNum.length == 0
        ) {
            let msg = "Check for empty field!!";
            hide_loader();
            handleFormError(msg);
        }
        else if (!genderArray.includes(formInput.gender)) {
            let msg = "Invalid selection!!";
            hide_loader();
            handleFormError(msg);
        }
        else {
            if (anyImg === true) {
                //send imgFormData to the backend when image is selected
                fetch(url, {
                    method: "POST",
                    body: imgFile
                })
                .then(response => {
                    // Check if the response was successful (e.g., status code 200-299)
                    if (!response.ok) {
                        let msg = "Error Processing!!";
                        hide_loader();
                        handleFormError(msg);
                    }
                    // Parse the response body as JSON
                    return response.json(); 
                })
                .then(data => {
                    console.log(data)
                    // Process the fetched image first and then send the form
                    hide_loader();

                    let code = data.code;
                    let msg = data.msg;
                    
                    if (code === "sw200") {
                        //success
                        //let's split msg
                        navigate('/Complete?'+data.msg);
                        localStorage.clear("apga");
                        setAnyImg(false);
                    }
                    else if (code === "sw120") {
                        //already submitted
                        navigate('/Submitted');
                        localStorage.clear("apga");
                    }
                    else {
                        //error
                        handleFormError(msg);
                    }
                })
                .catch(error => {
                    // Handle any errors during the fetch operation
                    let msg = "Error Processing!!";
                    hide_loader();
                    handleFormError(msg);
                });
            }
            else {
                //send imgFormData to the backend when image is selected
                fetch(url, {
                    method: "POST",
                    body: imgFormData
                })
                .then(response => {
                    // Check if the response was successful (e.g., status code 200-299)
                    if (!response.ok) {
                        let msg = "Error Processing!!";
                        hide_loader();
                        handleFormError(msg);
                    }
                    // Parse the response body as JSON
                    return response.json(); 
                })
                .then(data => {
                    console.log(data)
                    // Process the fetched image first and then send the form
                    hide_loader();

                    let code = data.code;
                    let msg = data.msg;
                    
                    if (code === "sw200") {
                        //success
                        //let's split msg
                        navigate('/Complete?'+data.msg);
                        localStorage.clear("apga");
                        setAnyImg(false);
                    }
                    else if (code === "sw120") {
                        //already submitted
                        navigate('/Submitted');
                        localStorage.clear("apga");
                    }
                    else {
                        //error
                        handleFormError(msg);
                    }
                })
                .catch(error => {
                    // Handle any errors during the fetch operation
                    let msg = "Error Processing!!";
                    hide_loader();
                    handleFormError(msg);
                });
            }
        }
    }


  return (
    <div className='mainForm'>
      <Nav></Nav>

        <h1 className='text-center bg-blue-950 rounded-sm m-8 text-white p-5 text-xl'>
            <b>
                ALL PROGRESSIVES GRAND ALLIANCE MEMBERSHIP FORM
            </b>
        </h1>

        <form onSubmit={handleForm} action="#" id='tForm' className='tForm bg-white shadow-sm border-t-2 flex justify-center items-center h-auto py-15 flex-col m-8 mb-20'>

            <div className='text-left flex-col'>
                {/* <p className='formLabel'>Title: </p>
                <input type="text" name='ntitle' id='ntitle' 
                    placeholder='Eg Chief, Sir, Mr, Mrs, etc'
                    className='mainFormInput bg-white mb-7 shadow-md' 
                    onChange={handleFormInput}   
                /> */}

                <p className='formLabel'>Surname: </p>
                <input type="text" name='sname' id='sname' 
                    placeholder='Eg Okoye'
                    className='mainFormInput bg-white mb-7 shadow-md' 
                    onChange={handleFormInput}   
                />

                <p className='formLabel'>Firstname: </p>
                <input type="text" name='fname' id='fname' 
                    placeholder='Eg Chukwuma'
                    className='mainFormInput bg-white mb-7 shadow-md' 
                    onChange={handleFormInput}   
                />

                <p className='formLabel'>Othername: </p>
                <input type="text" name='mname' id='mname' 
                    placeholder='Eg Olivia'
                    className='mainFormInput bg-white mb-7 shadow-md' 
                    onChange={handleFormInput}   
                />

                <p className='formLabel'>Gender: </p>
                <div className='flex flex-row align-center justify-center mb-7'>
                    <p className="genderLabel">Male</p>
                    <input type="radio" name='gender' id='male' 
                        className='mainFormInput bg-white'    
                        onChange={handleGender}
                    />

                    <p className="genderLabel">Female</p>
                    <input type="radio" name='gender' id='female' 
                        className='mainFormInput bg-white' 
                        onChange={handleGender}   
                    />
                </div>

                <p className='formLabel'>Date of Birth: </p>
                    <input type="date" name='dob' id='dob' 
                    className='mainFormInput bg-white mb-7 shadow-md' 
                    onChange={handleFormInput}   
                />

                <p className='formLabel'>Phone Number: </p>
                <input type="text" name='tel' id='tel' 
                    placeholder='Eg 08035566000'
                    className='mainFormInput bg-white mb-7 shadow-md' 
                    onChange={handleFormInput}   
                />

                <p className='formLabel'>LGA: </p>
                <select name="lga" id="lga" className='myDropdown mb-7 shadow-md' onChange={handleFormInput}>
                    <option value="" hidden>Choose LGA</option>
                    <option value="Aguata">Aguata</option>
                    <option value="Anambra East">Anambra East</option>
                    <option value="Anambra West">Anambra West</option>
                    <option value="Anaocha">Anaocha</option>
                    <option value="Awka North">Awka North</option>
                    <option value="Awka South">Awka South</option>
                    <option value="Ayamelum">Ayamelum</option>
                    <option value="Dunukofia">Dunukofia</option>
                    <option value="Ekwusigo">Ekwusigo</option>
                    <option value="Idemili North">Idemili North</option>
                    <option value="Idemili South">Idemili South</option>
                    <option value="Ihiala">Ihiala</option>
                    <option value="Njikoka">Njikoka</option>
                    <option value="Nnewi North">Nnewi North</option>
                    <option value="Nnewi South">Nnewi South</option>
                    <option value="Ogbaru">Ogbaru</option>
                    <option value="Onitsha North">Onitsha North</option>
                    <option value="Onitsha South">Onitsha South</option>
                    <option value="Orumba North">Orumba North</option>
                    <option value="Orumba South">Orumba South</option>
                    <option value="Oyi">Oyi</option>
                </select>

                <p className='formLabel'>Ward: </p>
                <select name="ward" id="ward" className='myDropdown mb-7 shadow-md' onChange={handleFormInput}>
                    <option value="" hidden>Choose your ward</option>
                    {pollWards.map((data, dataIndex) => {
                        return (
                            <option key={dataIndex} value={data}>{data}</option>
                        );
                    })}
                </select>

                {/* <p className='formLabel'>VIN Number: </p>
                <input type="text" name='vin' id='vin' 
                    placeholder='Eg: 4Y1SL65848Z411439'
                    className='mainFormInput bg-white mb-7 shadow-md'  
                    onChange={handleFormInput}  
                /> */}

                <p className='formLabel'>Occupation: </p>
                <input type="text" name='occupation' id='occupation' 
                    placeholder='Eg: Teacher'
                    className='mainFormInput bg-white mb-7 shadow-md'  
                    onChange={handleFormInput}  
                />

                <p className='formLabel'>Residential Address: </p>
                <input type="address" name='address' id='address' 
                    placeholder='N0 00 Ziks Avenue, Awka'
                    className='mainFormInput bg-white mb-7 shadow-md'  
                    onChange={handleFormInput}  
                />

                <p className='formLabel'>Account Name: </p>
                <input type="text" name='acct' id='acct' 
                    placeholder='Okeke Chukwuma'
                    className='mainFormInput bg-white mb-7 shadow-md'  
                    onChange={handleFormInput}  
                />

                <p className='formLabel'>Bank Name: </p>
                <select name="bank" id="bank" className='myDropdown mb-7 shadow-md' onChange={handleFormInput}>
                    <option value="" hidden>Choose your Bank</option>
                    {allBanks.map((data, dataIndex) => {
                        return (
                            <option key={dataIndex} value={data}>{data}</option>
                        );
                    })}
                </select>

                <p className='formLabel'>Account Number: </p>
                <input type="text" name='acctNum' id='acctNum' 
                    placeholder='0023433398'
                    className='mainFormInput bg-white mb-7 shadow-md'  
                    onChange={handleFormInput}  
                />

                <p className='my-3 text-sm text-green-700'>Images must be less than 2mb in size</p>
                <p className="formLabel">Upload Passport Image [Optional]:  </p>
                <div>
                    <input type="file" 
                        onChange={handleImage} 
                        placeholder='Choose an Image' 
                        id='imgData'
                        className='w-50 bg-gray-600 text-white mt-1 rounded-sm p-2 shadow-md'
                    />
                </div>

                <div id='resDiv' className={defRes}>
                    {resCont}
                </div>

                <section id='loader2' className='mt-8 flex align-center justify-center'>
                    <span className="loader"></span>
                </section>

                <p className='mt-10 text-center'>
                    <button id='submitForm' className={btnClass}>{btnContent}</button>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Form
