import React from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';

export default function ContactView() {
    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-center text-2xl font-semibold">Contact Us</h1>
            <div className="w-full flex h-screen">
                <div className="h-[90%] w-1/2 border-1 shadow-lg border-t-2 border-gray-300 rounded-md p-2 m-2">
                    <h3 className="text-lg font-semibold">Write To Us</h3>
                    <form action="" className="flex flex-col space-y-12">
                    <Box className="flex items-end">
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="standard-basic" label="Email Address" variant="standard" type="email" className="w-full" />
                    </Box>
                    <Box className="flex items-end">
                        <SubjectIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="standard-basic" label="Mail Subject" variant="standard" className="w-full" />
                    </Box> 
                        
                    <Box className="flex items-end">
                        <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="standard-basic" label="Phone Number" variant="standard" className="w-full" />
                    </Box>  
                    <Box className="flex">
                        <MessageIcon sx={{ color: 'action.active', mr: 1, my: 0.5, mt: 2.5 }} />
                        <TextField
                            id="standard-multiline-static"
                            label="Your Message"
                            multiline
                            rows={4}
                            variant="standard"
                            className="w-full"
                        />
                    </Box>                       
                        <Button variant="contained" endIcon={<SendIcon />}>SEND EMAIL</Button>
                    </form> 
                </div>
                <div className="h-[90%] w-1/2 border-1 shadow-lg border-t-2 border-gray-300 rounded-md p-2 m-2 space-y-2">
                    <h3 className="text-xl">Please Note</h3>
                    <ul className="list-disc p-4">
                        <li>
                         Refer to prices provided on this site.
                        </li>
                        <li>
                         Clarifications are quick if you call us on +254786178976 any day 8 A.M-8 P.M.
                        </li>
                        <li>
                            We do respond on Whatsapp and SMS as well.
                        </li>
                        <li>
                            Other means like Facebook, Twitter, Emails, Instagram are also available.
                        </li>
                    </ul>   
                    <h3 className="text-xl">Support</h3>
                    <ul className="list-disc p-4">
                        <li>
                            We would love to hear from you! For any questions, assistance, comments, compliments or complaints call us or write as a messag through any of the channels below and we'll try to get back to you as soon as possible...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}