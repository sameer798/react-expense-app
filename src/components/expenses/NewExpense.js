import React, { useEffect, useRef, useState } from "react";
import DisplayExpense from "./DisplayExpense";

function NewExpense() {
  const [newExpense, setNewExpense] = useState([]);
  const enteredSpentRef = useRef();
  const enteredDescriptionRef = useRef();
  const enteredCategoryRef = useRef();

  const getExpenseDataFromFirebase = async() =>{
    try {
        const response = await fetch("https://react-expense-5b6f8-default-rtdb.firebaseio.com/expenses.json");
    const data = await response.json();

    const loadedExpenses = [];

    for(const key in data){
        loadedExpenses.push({
            id: key,
            ...data[key]
        })
    }
    setNewExpense(loadedExpenses)
    } catch (error) {
        console.log("error", error)
    }
  }

    useEffect(()=>{
        getExpenseDataFromFirebase()
    },[newExpense])

  const expenseSubmitHandler = async (e) => {
    e.preventDefault();
    const spent = enteredSpentRef.current.value;
    const description = enteredDescriptionRef.current.value;
    const category = enteredCategoryRef.current.value;
    const newExpenseData = {
      spent,
      description,
      category,
    };
    try {
      const response = await fetch(
        "https://react-expense-5b6f8-default-rtdb.firebaseio.com/expenses.json",
        {
          method: "POST",
          body: JSON.stringify(newExpenseData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    
      const data = await response.json();
    //   if (response.ok) {
    //     setNewExpense((prevExpense) => {
    //       if (!Array.isArray(prevExpense)) {
    //         return [prevExpense];
    //       } else {
    //         return [...prevExpense, newExpenseData];
    //       }
    //     });

    //   }else{
    //     return
    //   }
    //   console.log(data);

    // if (response.ok) {
        // Update the local state by adding the new expense
    //     setNewExpense((prevExpense) => [
    //       ...prevExpense,
    //       { id: data.name, ...newExpenseData }, 
    //     ]);
    //   }

    } catch (error) {}

    enteredSpentRef.current.value = "";
    enteredDescriptionRef.current.value = "";
  };

  return (
    <>
      <div className="bg-green-300 h-14 text-center pt-3 font-bold">
        Day to Day Expenses
      </div>

      <div className="mt-7 flex justify-center">
        <form onSubmit={expenseSubmitHandler}>
          <input
            type="number"
            placeholder="spent"
            className="ml-2  border-b-2 "
            ref={enteredSpentRef}
          />
          <input
            type="text"
            placeholder="description"
            className="ml-2 border-b-2"
            ref={enteredDescriptionRef}
          />
          <label htmlFor="category" className="ml-2">
            category:
          </label>
          <select name="category" id="category" ref={enteredCategoryRef}>
            <option value="volvo">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Shopping">Shopping</option>
            <option value="Grocery">Grocery</option>
          </select>
          <button className=" ml-2 font-serif text-sm  bg-gradient-to-r from-purple-500 to-pink-500 text-white p-1 rounded hover:bg-gradient-to-l">
            Add expense
          </button>
        </form>
      </div>
      {newExpense.length === 0 ? (
        <p className="font-serif text-center mt-8 ">No expenses</p>
      ) : (
        <DisplayExpense expense={newExpense} />
      )}
    </>
  );
}

export default NewExpense;
