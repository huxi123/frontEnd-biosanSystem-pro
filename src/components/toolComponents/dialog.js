import {Modal,Message} from 'monkeyui';

const showError=(t,c)=>{
  Modal.error({
    title: t,
    content: c
  });
}


const info=(t,c)=>{
  Modal.info({
    title:t,
    content:c
  });
}

const warn=(t,c)=>{
  Modal.warning({
    title:t,
    content:c
  })  
}

const successMessage = (message)=> {
  Message.success(message);
};

const errorMessage = (message)=> {
  Message.error(message);
};

const warningMessage = (message)=> {
  Message.warning(message);
};

const showSuccess=(t,c)=>{
  Modal.success({
    title: t,
    content: c
  });
}


module.exports = {
	showSuccess:showSuccess,
	showError:showError,
	info:info,
	warn:warn,
	successMessage:successMessage,
	errorMessage:errorMessage,
	warningMessage:warningMessage
}