export class Investorclass {
    constructor(public fk_user_id: number,
        public amount: number,
        public start_date: Date,
         public expec_ret: Date,
         public act_ret: Date,
         public pref_loc1: string,
         public pref_loc2: string,
         public pref_loc3: string) {


    }
}
