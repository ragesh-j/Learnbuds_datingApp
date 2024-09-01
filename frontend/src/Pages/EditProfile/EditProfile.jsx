import React, { useEffect,useState } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import styles from "./EditProfile.module.css"; // Import CSS module
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNetworkRequest } from "../../CustomHooks/useNetworkRequest";
import profile1 from "../../assets/profile1.jpg"
import { useForm } from "react-hook-form";

const groupContacts = (contacts) => {
    console.log("contacts",contacts)
    const sortedContacts = contacts.sort((a, b) => a.savedProfile.Name.localeCompare(b.savedProfile.Name));
    return sortedContacts.reduce((acc, contact) => {
        const firstLetter = contact.savedProfile.Name.charAt(0).toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(contact);
        return acc;
    }, {});
};

const Shortlisted = () => {
    const {data,error,loading}=useNetworkRequest()
    const {register, handleSubmit, watch, formState: { errors }} = useForm()
    const [Files,setFiles] = useState([]);

    const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(new Error("Error reading file"));
            reader.readAsDataURL(file);
        });
    }

    const handleFileChange=async (e)=>{
        const file = e.target.files[0];
        const dataUrl = await readFileAsDataURL(file)
        setFiles(prev => {
            if(e.target.name==="Reel"){
                return [
          ...prev,
          {
            Name: "Reel",
            dataUrl
          }
        ];
            }
        const lastIndex = prev.length - 1;
        const lastName = prev[lastIndex]?.Name || 'Image0';
        const lastNumber = parseInt(lastName.split("Image")[1], 10) || 0;
        const newName = `Image${lastNumber + 1}`;
        return [
          ...prev,
          {
            Name: newName,
            dataUrl
          }
        ];
      });
    }

    function submitHandler(data){
        if(Files.length!==0){
            data["Files"] = Files
        }
        console.log(data)
    }

    useEffect(()=>{
        console.log(Files)
    },[Files])

    return (
        <>
        <Header />
        <div className={styles.app}>
            <div className={styles.contactList}>
                <div className={styles.profileContainer}>
                    <img src={profile1} alt="avatar" className={styles.profileImg}/>
                    <div>
                        <h1>Nizam</h1>
                        <span>Never give up</span>
                    </div>
                </div>
                <p className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia asperiores ad, officiis unde repellendus vero quam, quibusdam sit non modi perspiciatis dolorum ipsum quae voluptates dolorem alias iure commodi inventore numquam nostrum.
                </p>
                <div>
                    <form action="" className={styles.formItems} onSubmit={handleSubmit(submitHandler)}>
                        <input type="text" placeholder="Name" className={styles.input} {...register("Name")}/>
                        {/* <input type="text" placeholder="User Name" className={styles.input} {...register("UserName")}/> */}
                        <input type="text" placeholder="Email" className={styles.input} {...register("Email")}/>
                        <input type="text" placeholder="Phone Number" className={styles.input} {...register("Contact")}/>
                        <input type="text" placeholder="Bio" className={styles.input} {...register("Bio")}/>
                        <div className={styles.filesContainer}> 
                            {
                                Files&&Files.filter(item=>item.Name!=="Reel").map((file,index)=>{
                                    return <img key={index} src={file.dataUrl} alt={file.Name} className={styles.file}/>
                                })
                            }
                            <input type="file" className={styles.addBtn} onChange={handleFileChange}/>
                        </div>
                        <div className={styles.filesContainer}> 
                            <input type="file" name="Reel" className={styles.addBtn} onChange={handleFileChange}/>
                        </div>
                        <div className={styles.updateBtnContainer}>
                            <button className={styles.submitBtn} type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
   </> );
};

export default Shortlisted;
