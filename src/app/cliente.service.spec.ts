import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAll clients', () => {
    const clients = service.getAll();
    // Expect some assertions based on what getAll should return
    // For example, expect(clients.length).toBeGreaterThan(0);
  });

  it('should getById client', () => {
    const id = 1; // Assuming 1 is a valid ID
    const client = service.getById(id);
    // Expect some assertions based on what getById should return
    // For example, expect(client.id).toEqual(id);
  });

  it('should save client', () => {
    const newClient = { name: 'John', email: 'john@example.com' }; // Assuming this is a valid new client object
    const savedClient = service.save(newClient);
    // Expect some assertions based on what save should return or do
    // For example, expect(savedClient.id).toBeDefined();
  });

  it('should delete client', () => {
    const idToDelete = 1; // Assuming 1 is a valid ID to delete
    const deletedClient = service.delete(idToDelete);
    // Expect some assertions based on what delete should return or do
    // For example, expect(deletedClient).toBeTruthy();
  });

  it('should update client', () => {
    const idToUpdate = 1; // Assuming 1 is a valid ID to update
    const updatedClientData = { name: 'Updated Name' }; // Assuming this is a valid updated data object
    const updatedClient = service.update(idToUpdate, updatedClientData);
    // Expect some assertions based on what update should return or do
    // For example, expect(updatedClient.name).toEqual(updatedClientData.name);
  });
});
