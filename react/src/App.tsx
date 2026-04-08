import React from "react";
import { DataTable } from "./DataTable";


type Estudiante = {
  id: string;
  nombre: string;
  edad: number;
};

const estudiantes: Estudiante[] = [
  { id: "1", nombre: "Juan", edad: 20 },
  { id: "2", nombre: "Ana", edad: 22 },
];

<DataTable
  data={estudiantes}
  columns={[
    { key: "nombre", label: "Nombre" },
    { key: "edad", label: "Edad" },
  ]}
/>;