import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import LoginModal from "./LoginModal";
import EwNavbar from "./EwNavbar";



function ESchool() {
    return (
        <>
            <h1 className="text-nowrap">E-School Online Management System</h1>
            <span>Managed by E Window Ltd, Patna(Bihar)</span>
            <div className='clearfix d-inline'>
                <ButtonGroup className='float-end' >
                    <Button className='me-2'>SignUP</Button>
                    <LoginModal/>
                </ButtonGroup>
            </div>
            <hr />
            <EwNavbar/>
            
        </>
    )
}

export default ESchool;
