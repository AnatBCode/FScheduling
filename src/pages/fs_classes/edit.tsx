import { Edit, useAutocomplete,  } from "@refinedev/mui";
import { Box, TextField, Checkbox, FormControlLabel, Autocomplete  } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";
import { useUpdate } from  "@refinedev/core";

export const ClassEdit = () => {
    const {
        saveButtonProps,
        refineCore: { queryResult },
        register,
        control,
        formState: { errors },
    } = useForm();

    const classData = queryResult?.data?.data;

    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
        resource: "fs_prodcategory",
        defaultValue: classData?.category,
    });

 //   const { mutate: updateClass } = useUpdate({ resource: "fs_classes" });


    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("id", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.id}
                    helperText={(errors as any)?.id?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Id"
                    name="id"
                    disabled
                />
                <TextField
                    {...register("name", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.name}
                    helperText={(errors as any)?.name?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Name"
                    name="name"
                />
                
{/*                 <TextField
                    {...register("category", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.category}
                    helperText={(errors as any)?.category?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Category"
                    name="category"
                /> */}




                <Controller
                    control={control}
                    name="category"
                    rules={{ required: "This field is required" }}
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <Autocomplete
                            {...categoryAutocompleteProps}
                            {...field}
                            onChange={(_, value) => {
                                field.onChange(value);
                            }}
                            getOptionLabel={(item) => {
                                return (
                                    categoryAutocompleteProps?.options?.find(
                                        (p) =>
                                            p?.id?.toString() ===
                                            (item?.id ?? item)?.toString(),
                                    )?.catname ?? ""
                                );
                            }}
                            isOptionEqualToValue={(option, value) =>
                                value === undefined ||
                                option?.id?.toString() ===
                                    value?.toString()
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Category"
                                    margin="normal"
                                    variant="outlined"
                                    error={!!(errors as any)?.category}
                                    helperText={
                                        (errors as any)?.category?.message
                                    }
                                    required
                                />
                            )}
                        />
                    )}
                />


                <TextField
                    {...register("duration", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.duration}
                    helperText={(errors as any)?.duration?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Duration"
                    name="duration"
                />
                <Controller
                    control={control}
                    name="active"
                    // eslint-disable-next-line
                    defaultValue={null as any}
                    render={({ field }) => (
                        <FormControlLabel
                            label="Active"
                            control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(event) => {
                                        field.onChange(event.target.checked);
                                    }}
                                />
                            }
                        />
                    )}
                />
                <TextField
                    {...register("code", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.code}
                    helperText={(errors as any)?.code?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Code"
                    name="code"
                />
                <TextField
                    {...register("signcutoff", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.signcutoff}
                    helperText={(errors as any)?.signcutoff?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Signcutoff"
                    name="signcutoff"
                />
                <TextField
                    {...register("cancelcutoff", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.cancelcutoff}
                    helperText={(errors as any)?.cancelcutoff?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Cancelcutoff"
                    name="cancelcutoff"
                />
                <TextField
                    {...register("wlcutoff", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.wlcutoff}
                    helperText={(errors as any)?.wlcutoff?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Wlcutoff"
                    name="wlcutoff"
                />
                <TextField
                    {...register("eventtype", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.eventtype}
                    helperText={(errors as any)?.eventtype?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Eventtype"
                    name="eventtype"
                />
                <TextField
                    {...register("listorder", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.listorder}
                    helperText={(errors as any)?.listorder?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Listorder"
                    name="listorder"
                />
            </Box>
        </Edit>
    );
};
