import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
    const { register, handleSubmit } = useForm();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://sthilaire-api-categoriesincomes-crud.onrender.com/Api/categoriesincomes')
            .then(response => setCategories(response.data.incomes))
            .catch(error => console.error('Error:', error));
    }, []);

    const onSubmit = async (data) => {
        try {
            console.log("Data:", data);

            await axios.get('https://saint-api-incomes-crud.onrender.com/Api/incomes', data);

            console.log("Income ");
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Amount</label>
                <input {...register("amount")} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" {...register("date")} />
            </div>
            <div>
                <label>Income Category</label>
                <select {...register("categoriesincomes")}>
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>
                            {category.title}
                        </option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Save Income" />
        </form>
    );
}
