import React , {useState, useEffect} from 'react';
import {useAuth} from '../contexts/auth';

import api from '../api/api';

function MailItem({data}) {

    return (
        <di>
            <p>sent at {data.upload_time}</p>
            <p>receiver : {data.receiver}</p>
            <p>sender : {data.sender}</p>
            <p>object : {data.object}</p>
            <p>message : {data.message}</p>
        </di>
    )

}

function Mail() {
  
    const {user} = useAuth();

    const [data, setData] = useState(null);

    useEffect( async () => {
        const {data: mails} = await api.post('mailbox/get');
        setMail(mails.mails)
    },[]);
    const [mail, setMail] = useState([]);

  return (
      <div>
          {mail.map((data) => 
            <MailItem
            key={data.upload_time}
            data={data}
            />
        )}
      </div>
  );
}

export default Mail;