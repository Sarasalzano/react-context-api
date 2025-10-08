import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";


export default function Button(){
//prendi lo stato budgetMode e la funzione per aggiornarlo
const {budgetMode, setBudgetMode} = useContext(BudgetContext);

return(
    //al click invertiamo il valore di budgetMode
    <button onClick={()=>setBudgetMode(!budgetMode)}>
        {/* modifica testo bottone a seconda dello stato true o false del budgetmode */}
        {budgetMode ? "BUDGETMODE OFF" : "BUDGETMODE ON"}
    </button>
);
}