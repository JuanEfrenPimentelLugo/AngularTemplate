import { Type } from 'class-transformer';
import { UserDetailsDto } from './user-details-dto';
export class tokenDto {
    sub: string;
    exp: string;
    iat: string;
    @Type(() => UserDetailsDto)
    userDetails: UserDetailsDto;
    //, authorities: Array(1)
    //private List<GrantedAuthority> authorities;
}
