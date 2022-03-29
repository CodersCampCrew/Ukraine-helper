export default interface Dao<DTO> {
  get(id: string): DTO;
  getAll(): Array<DTO>;
  save(dto: DTO): void;
  update(id: string, params: Array<string>): void;
  delete(id: string): void;
}
