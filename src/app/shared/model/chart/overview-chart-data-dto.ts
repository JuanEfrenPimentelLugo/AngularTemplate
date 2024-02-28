import { Type } from "class-transformer";
import { DatasetsDto } from "./datasets-dto";

export class OverviewChartDataDto {
    descripcion: string;
    icon: string;
    classColor: string;
    conteoActivos: number;
    conteoInactivos: number;
	labels: string[];
    @Type(() => DatasetsDto)
	datasets: DatasetsDto;
}
