import { useReducer, createContext, ReactNode } from "react";
import {
  BudgetActions,
  BudgetState,
  budgetReducer,
  initialState,
} from "../reducers/budget-reducer";
{/*​‌‍‍⁡⁢⁣⁣ NOTA ==> Definir los tipos de props, el del children siempre es ReactNode⁡​ */}
type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
};
type BudgetProviderProps = {
  children: ReactNode;
};

{/* ​‌‍‍⁡⁢⁣⁣NOTA ==> Crear el context y ponerle el type de props definido antes⁡​ ​‌‍‍⁡⁢⁣⁣el {} as BudgetContextProps puede ser eso o null!⁡​*/}

export const BudgetContext = createContext<BudgetContextProps>(
  {} as BudgetContextProps
);
{/* ⁡⁢⁣⁣​‌‍‍NOTA ==> Creamos el proveedor, los datos que van a ser generalizados en la app, en este caso el state y dispatch del usereducer​⁡ */}
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
{/*​‌‍‍⁡⁢⁣⁣ NOTA ==> Acordarse de rodear con las etiquetas en donde vaya a querer los datos, en este caso en el main.tsx⁡​ */}
