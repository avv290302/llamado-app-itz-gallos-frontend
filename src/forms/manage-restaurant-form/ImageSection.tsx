import { FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { useFormContext } from "react-hook-form"

export default function ImageSection(){
    const { control, watch } = useFormContext()

    const existingImageUrl = watch("imageUrl")
    return (
        <div className="space-y-2">
        <div>
        <h2 className="text-2xl font-bold">Imagen</h2>
        <FormDescription>
            <div>Agregue una imagen que se mostrara en la seccion de busqueda del
                listado de restaurante
            </div>
            <div>Agregar una nueva imagen sustituye la existencia</div>
        </FormDescription>
        </div>
        <div className="flex flex-col gap-8 w-[50%]">
            {
                existingImageUrl && (
                    <AspectRatio ratio={16/9}>
                        <img
                        src={existingImageUrl}
                        className="rounded-md object-cover h-full w-full"
                        />
                    </AspectRatio>
                )
            }
            <FormField
            control={control}
            name="imageFile"
            render={
                ({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input
                            className="bg-white"
                            type="file"
                            accept=".jpg, .jpeg, .png, .webp"
                            onChange={(event) =>
                                field.onChange(
                                    event.target.files ? event.target.files[0] : null
                                )
                            }
                            />
                        </FormControl>
                    </FormItem>
                )
            }
            />
        </div>
        </div>
    )
}