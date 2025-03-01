import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    toast.error('Ошибка загрузки контактов!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    toast.success(`Контакт ${contact.name} добавлен!`);
    return data;
  } catch (error) {
    toast.error('Ошибка добавления контакта!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    toast.success('Контакт удален!');
    return contactId;
  } catch (error) {
    toast.error('Ошибка удаления контакта!');
    return thunkAPI.rejectWithValue(error.message);
  }
});



