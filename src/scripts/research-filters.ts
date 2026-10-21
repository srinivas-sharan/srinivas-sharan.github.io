export interface ResearchFilterRecord {
  areas: string[];
  capabilities?: string[];
  status?: string;
  year?: string | number;
  text?: string;
}
export interface ResearchFilters { area?: string; capability?:string; status?: string; year?: string; search?: string; }
const normalize = (value: string) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function matchesResearchFilters(record: ResearchFilterRecord, filters: ResearchFilters) {
  const terms=normalize(filters.search??'').trim().split(/\s+/).filter(Boolean);
  const text=normalize(record.text??'');
  return (!filters.area||filters.area==='all'||record.areas.includes(filters.area))
    && (!filters.capability||filters.capability==='all'||!!record.capabilities?.includes(filters.capability))
    && (!filters.status||filters.status==='all'||record.status===filters.status)
    && (!filters.year||filters.year==='all'||String(record.year)===filters.year)
    && terms.every(term=>text.includes(term));
}
