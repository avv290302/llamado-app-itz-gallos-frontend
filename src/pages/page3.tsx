import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  nombreEquipo: z.string().nonempty({ message: 'El nombre del equipo es requerido.' }),
  nombreSoltador: z.string().nonempty({ message: 'El nombre del soltador es requerido.' }),
  pesos: z.array(z.string().nonempty({ message: 'El peso es requerido.' })).length(5),
  anillos: z.array(z.string().nonempty({ message: 'El anillo es requerido.' })).length(5),
});

interface FormValues {
  nombreEquipo: string;
  nombreSoltador: string;
  pesos: string[];
  anillos: string[];
}

const Page2: React.FC = () => {
  const [equipos, setEquipos] = useState<{ 
    nombreEquipo: string; 
    nombreSoltador: string; 
    pesos: number[]; 
    anillos: number[] 
  }[]>([]);
  
  const [editIndex, setEditIndex] = useState<number | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombreEquipo: '',
      nombreSoltador: '',
      pesos: ['', '', '', '', ''],
      anillos: ['', '', '', '', ''],
    },
  });

  const onSubmit = (data: FormValues) => {
    const pesosNumericos = data.pesos.map(p => parseFloat(p));
    const anillosNumericos = data.anillos.map(a => parseFloat(a));

    if (pesosNumericos.every(p => !isNaN(p)) && anillosNumericos.every(a => !isNaN(a))) {
      if (editIndex !== null) {
        const updatedEquipos = [...equipos];
        updatedEquipos[editIndex] = { 
          nombreEquipo: data.nombreEquipo, 
          nombreSoltador: data.nombreSoltador, 
          pesos: pesosNumericos, 
          anillos: anillosNumericos 
        };
        setEquipos(updatedEquipos);
        setEditIndex(null);
      } else {
        setEquipos([...equipos, { 
          nombreEquipo: data.nombreEquipo, 
          nombreSoltador: data.nombreSoltador, 
          pesos: pesosNumericos, 
          anillos: anillosNumericos 
        }]);
      }
      form.reset();
    } else {
      alert('Por favor ingrese valores numéricos válidos en todos los campos.');
    }
  };

  const onEdit = (index: number) => {
    const equipo = equipos[index];
    form.setValue('nombreEquipo', equipo.nombreEquipo);
    form.setValue('nombreSoltador', equipo.nombreSoltador);
    form.setValue('pesos', equipo.pesos.map(p => p.toString()));
    form.setValue('anillos', equipo.anillos.map(a => a.toString()));
    setEditIndex(index);
  };

  const onDelete = (index: number) => {
    const updatedEquipos = equipos.filter((_, i) => i !== index);
    setEquipos(updatedEquipos);
  };

  const generarRondas = () => {
    alert('Generar rondas no está implementado todavía.');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', margin: '20px' }}>
      <h1 style={{ fontSize: '2em' }}>Ingresar Datos del Equipo</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6" style={{ margin: '0 auto' }}>
          <FormField
            control={form.control}
            name="nombreEquipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ fontSize: '1.2em' }}>Nombre del Equipo</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del Equipo" {...field} style={{ fontSize: '1em' }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nombreSoltador"
            render={({ field }) => (
              <FormItem>
                <FormLabel style={{ fontSize: '1.2em' }}>Nombre del Soltador</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre del Soltador" {...field} style={{ fontSize: '1em' }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {[0, 1, 2, 3, 4].map(index => (
            <div key={index} className="flex justify-between" style={{ justifyContent: 'space-between' }}>
              <FormField
                control={form.control}
                name={`pesos.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ fontSize: '1.2em' }}>Peso {index + 1}</FormLabel>
                    <FormControl>
                      <Input placeholder={`Peso ${index + 1}`} {...field} style={{ fontSize: '1em' }} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`anillos.${index}`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ fontSize: '1.2em' }}>Anillo {index + 1}</FormLabel>
                    <FormControl>
                      <Input placeholder={`Anillo ${index + 1}`} {...field} style={{ fontSize: '1em' }} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
          <Button type="submit" style={{ fontSize: '1.2em' }}>{editIndex !== null ? 'Actualizar Equipo' : 'Agregar Equipo'}</Button>
        </form>
      </Form>
      <Button onClick={generarRondas} style={{ marginTop: '20px', fontSize: '1.2em' }}>Generar Rondas</Button>
      <table style={{ marginTop: '20px', width: '80%', borderCollapse: 'collapse', marginLeft: 'auto', marginRight: 'auto' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2', fontSize: '1.2em' }}>Nombre del Equipo</th>
            <th style={{ border: '1px solid #ddd',
padding: '12px', backgroundColor: '#f2f2f2', fontSize: '1.2em' }}>Nombre del Soltador</th>
{[0, 1, 2, 3, 4].map(index => (
  <React.Fragment key={index}>
    <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2', fontSize: '1.2em' }}>Peso {index + 1}</th>
    <th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2', fontSize: '1.2em' }}>Anillo {index + 1}</th>
  </React.Fragment>
))}
<th style={{ border: '1px solid #ddd', padding: '12px', backgroundColor: '#f2f2f2', fontSize: '1.2em' }}>Acciones</th>
</tr>
</thead>
<tbody>
{equipos.map((equipo, index) => (
<tr key={index}>
  <td style={{ border: '1px solid #ddd', padding: '12px', fontSize: '1.2em' }}>{equipo.nombreEquipo}</td>
  <td style={{ border: '1px solid #ddd', padding: '12px', fontSize: '1.2em' }}>{equipo.nombreSoltador}</td>
  {equipo.pesos.map((peso, i) => (
    <React.Fragment key={i}>
      <td style={{ border: '1px solid #ddd', padding: '12px', fontSize: '1.2em' }}>{peso}</td>
      <td style={{ border: '1px solid #ddd', padding: '12px', fontSize: '1.2em' }}>{equipo.anillos[i]}</td>
    </React.Fragment>
  ))}
  <td style={{ border: '1px solid #ddd', padding: '12px', fontSize: '1.2em' }}>
    <Button onClick={() => onEdit(index)} className="mr-2">Editar</Button>
    <Button onClick={() => onDelete(index)} variant="destructive">Eliminar</Button>
  </td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default Page2;
