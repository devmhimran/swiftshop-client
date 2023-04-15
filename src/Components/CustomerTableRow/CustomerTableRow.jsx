import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios';

const CustomerTableRow = ({ customer }) => {
    const { _id, name, email, phone, address } = customer;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const url = `http://localhost:5000/customer/${_id}`;
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    const [singleCustomer, setSingleCustomer] = useState([]);

    useEffect(() => {
        axios.get(url, { headers })
            .then(res => setSingleCustomer(res.data))
    }, [_id])

    console.log()

    return (
        <>
            <tr>
                <td className='py-2'><p>{name}</p></td>
                <td className='py-2'><p>{email}</p></td>
                <td className='py-2'><Button onClick={handleOpen}>View</Button></td>
            </tr>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>User Detail</DialogHeader>
                <DialogBody divider>
                    <p>Name: {singleCustomer.name}</p>
                    <p>Email: {singleCustomer.email}</p>
                    <p>Address: {singleCustomer.address}</p>
                    <p>Phone: {singleCustomer.phone}</p>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default CustomerTableRow;