type TopFa = 'Mau' | 'Vidane' | 'Mary Joe' | 'MaudaneJoe';
type Status = 'Mencionado' | 'Enviado';

export interface ProximosTopFasModel {
  _id: number;
  nome: string;
  topfa: TopFa;
  mensagem: string;
  status: Status;
  dataHora: string;
}
