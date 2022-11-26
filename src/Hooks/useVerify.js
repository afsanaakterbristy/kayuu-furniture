import { useEffect, useState } from "react"

const useVerify = email => {
    const [isVerify, setIsVerify] = useState(false);
    const [isVerifyLoading, setIsVerifyLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/sellerverify/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsVerify(data.isVerify);
                    setIsVerifyLoading(false);
                })
        }
    }, [email])
    return [isVerify, isVerifyLoading]
}

export default useVerify;