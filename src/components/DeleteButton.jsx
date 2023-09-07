import { handleDelete } from "express/lib/application";

const DeleteButton = ({ onClick }) => {
    return (
      <DeleteButton onClick={ e=> handleDelete(d.id)} ClassName='DeleteButton'>x</DeleteButton>
    
    );
  };
  
  export default DeleteButton;