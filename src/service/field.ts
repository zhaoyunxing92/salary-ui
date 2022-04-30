import axios from './axios';
import { Field } from '../models';

class FieldService {
    private static service: FieldService = new FieldService()

    static getInstance(): FieldService {
        return FieldService.service
    }

    List(): Promise<Field[]> {
        return axios.get('/field/list/v1').then(res => res.data.data)
    }

    Update(field: Field): Promise<Field[]> {
        return axios.put('/field/update', field).then(res => res.data)
    }
}

export function useFieldService(): FieldService {
    return FieldService.getInstance()
}