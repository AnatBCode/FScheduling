import React from "react";
import {
    useDataGrid,
    EditButton,
    ShowButton,
    DeleteButton,
    List,
} from "@refinedev/mui";

import Checkbox from '@mui/material/Checkbox';

import { DataGrid, GridColumns } from "@mui/x-data-grid";

export const FsPackageList = () => {
    const { dataGridProps } = useDataGrid();

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
                minWidth: 200,
            },
            {
                field: "type",
                headerName: "Type",
                type: "number",
                minWidth: 200,
            },
            {
                field: "active",
                headerName: "Active",
                minWidth: 250,
                renderCell: function render({ value }) {
                    return <Checkbox checked={!!value} />;
                },
            },
            {
                field: "code",
                headerName: "Code",
                minWidth: 200,
            },
            {
                field: "listorder",
                headerName: "Listorder",
                type: "number",
                minWidth: 200,
            },
            {
                field: "actions",
                headerName: "Actions",
                renderCell: function render({ row }) {
                    return (
                        <>
                            <ShowButton hideText recordItemId={row.id} />
                        </>
                    );
                },
                align: "center",
                headerAlign: "center",
                minWidth: 80,
            },
        ],
        [],
    );

    return (
        <List>
            <DataGrid {...dataGridProps} columns={columns} autoHeight />
        </List>
    );
};
