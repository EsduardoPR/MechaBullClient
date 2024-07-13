import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../molecules/auths/button";
export function SectionErrorRecoveryPasswd(){
    const location = useLocation();
    const navigate = useNavigate();
    const reason = location.state?.reason;

    const [msg, setMsg] = useState('')

    React.useEffect(() => {
        if (!reason) {
          navigate('/');
        }
      }, [reason, navigate]);
    useEffect(() => {
        switch (reason) {
            case 'token-expired':
                console.log('invalid-token-or-expired')
                setMsg('El enlace de restablecimiento de contraseña ha caducado. Por favor, solicita uno nuevo.')
            break;
            case 'no-token':
                console.log('no-token')
                setMsg('No se proporcionó un token de restablecimiento de contraseña.')
            break;
        }
    }, [])

    const returt = () => {
        setMsg('')
        navigate('/', { replace: true, state: null });
    }


    return(
        <section className="section-error-rec-pass">
            <div className="content-information">
                <div className="title">
                    <h2>Algo ha sucedido mal &nbsp;</h2>
                    <h1>:(</h1>
                </div>
                <div className="information">
                    <p>{msg}</p>
                </div>
                <Button onClick={returt} className="button-rerror-rec-pass" typeButton={"Regresar a inicio"}/>
            </div>
        </section>
    )
}