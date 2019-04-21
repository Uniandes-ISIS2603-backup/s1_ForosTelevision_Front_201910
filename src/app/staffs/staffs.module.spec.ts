import { StaffsModule } from './staffs.module';

describe('StaffsModule', () => {
    let staffsModule: StaffsModule;

    beforeEach(() => {
        staffsModule = new StaffsModule();
    });

    it('should create an instance', () => {
        expect(staffsModule).toBeTruthy();
    });
});
