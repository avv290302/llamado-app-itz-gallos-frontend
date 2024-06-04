import { useCreateRestaurant, useGetRestaurant, useUpdateRestaurante } from "@/api/RestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";


export default function ManageRestaurantPage() {
    const { createRestaurant, isLoading: isCreateLoading } = useCreateRestaurant()
    const { restaurant } = useGetRestaurant();
    const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateRestaurante();

    const isEditting = !!restaurant;

    return (
        <ManageRestaurantForm
        restaurant = {restaurant}
        onSave={isEditting? updateRestaurant: createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
        />
    )

}