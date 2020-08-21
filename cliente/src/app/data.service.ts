import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "https://localhost:44313;

  constructor(
    private http: httpClient
  ) { }

  public getClientes() {
    return this.http.get('${this.baseUrl}/v1/cliente/GetAll', { headers: this.composeHeaders() });
  }
  public postCliente(data) {
    return this.http.post('${this.baseUrl}/v1/cliente/GetAll', { headers: this.composeHeaders() });
  }

}
