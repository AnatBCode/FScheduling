import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
//    DeleteButton,
    List,
//    Checkbox,
} from "@refinedev/mui";

import Checkbox from '@mui/material/Checkbox';

import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";

export const FsClassList = () => {
    const { dataGridProps } = useDataGrid();

    const { data: categoryData } = useMany({
        resource: "fs_prodcategory",
        ids: dataGridProps?.rows?.map((item: any) => item?.category) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });
    const { data: eventtypeData } = useMany({
        resource: "fs_eventtype",
        ids: dataGridProps?.rows?.map((item: any) => item?.eventtype) ?? [],
        queryOptions: {
            enabled: !!dataGridProps?.rows,
        },
    });


    const columns = React.useMemo<GridColumns<any>>(
        () => [
            {
                field: "id",
                headerName: "Id",
                type: "number",
                minWidth: 50,
            },
            {
                field: "name",
                headerName: "Name",
                minWidth: 250,
            },
            {
                field: "category",
                headerName: "Category",
                valueGetter: ({ row }) => {
                    const value = row?.category;

                    return value;
                },
                minWidth: 80,
                renderCell: function render({ value }) {
                    const t = categoryData?.data?.find((item) => item.id === value)?.catname;
                    if(t !== undefined) { return t; }
                    else { return <>Loading...</>; }
                },
            },
            {
                field: "duration",
                headerName: "Duration",
                type: "number",
                minWidth: 50,
            },
            {
                field: "active",
                headerName: "Active",
                minWidth: 20,
                renderCell: function render({ value }) {
                    return <Checkbox checked={!!value} />;
                },
            },
            {
                field: "code",
                headerName: "Code",
                minWidth: 40,
            },
            {
                field: "signcutoff",
                headerName: "Signcutoff",
                type: "number",
                minWidth: 20,
            },
            {
                field: "cancelcutoff",
                headerName: "Cancelcutoff",
                type: "number",
                minWidth: 20,
            },
            {
                field: "wlcutoff",
                headerName: "Wlcutoff",
                type: "number",
                minWidth: 20,
            },
            {
                field: "eventtype",
                headerName: "Event Type",
                valueGetter: ({ row }) => {
                    const value = row?.eventtype;

                    return value;
                },
                minWidth: 80,
                renderCell: function render({ value }) {
                    const t = eventtypeData?.data?.find((item) => item.id === value)?.typename;
                    if(t !== undefined) { return t; }
                    else { return <>Loading...</>; }
                },
            },


            {
                field: "listorder",
                headerName: "Listorder",
                type: "number",
                minWidth: 20,
            },
            {
                field: "actions",
                headerName: "Actions",
                renderCell: function render({ row }) {
                    return (
                        <>
                            <EditButton hideText recordItemId={row.id} />                        
                            <ShowButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [categoryData?.data, eventtypeData?.data],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
