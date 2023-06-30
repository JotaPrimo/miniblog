const AlertDanger = ({ msg }) => {
  return (
    <div className="alert-danger" fillRule="alert">      
      <p className="text-white"> <strong className="font-medium">Ocorreu um erro!</strong> {msg}</p>
    </div>
  );
};

export default AlertDanger;
