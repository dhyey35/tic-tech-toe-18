export class Voluteerclass {
    constructor(public fk_user_id: number,
        public fk_lab_id: number,
        public skills: string,
        public qualifications: string,
        public pref_loc1: number,
        public pref_loc2: number,
        public pref_loc3: number,
    ) {


    }
}
