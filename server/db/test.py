class fish(db.Model):
    __tablename__='fish'
    fish_id = db.Column(db.Integer, primary_key=True,index=True)
    CommonName = db.Column(db.String(128))
    LocalCommonName = db.Column(db.String(128))
    ScientificName = db.Column(db.String(128))
    FrequencyMislabeling = db.Column(db.String(128))
    ConfusedSpecies = db.Column(db.String(1000))
    WholePic = db.Column(db.String(128))
    TinyPic = db.Column(db.String(128))
    LargePic = db.Column(db.String(128))
    FilletLength = db.Column(db.String(128))
    FilletWeight = db.Column(db.String(128))
    FilletColour = db.Column(db.String(128))
    FilletOdour = db.Column(db.String(128))
    FishBaseDescription = db.Column(db.String(128))
    SustainabilityRating = db.Column(db.String(128))
    OceanWise = db.Column(db.String(128))
    MSCRating = db.Column(db.String(128))
    IUCNRating = db.Column(db.String(128))
    CITESstatus = db.Column(db.String(128))
    Habitat = db.Column(db.String(128))
    L50M = db.Column(db.String(128))
    MaxAge = db.Column(db.String(128))
    MaxSize = db.Column(db.String(128))
    RecommendedConsumptionSize = db.Column(db.String(128))
    Distribution = db.Column(db.String(128))
    TrophicLevel = db.Column(db.String(128))
    Value = db.Column(db.String(128))
    SoldAs = db.Column(db.String(128))
    def get_id(self):
        return self.bird_id
    def to_json(self):
        json_obj={
            "fish_id": self.fish_id,
        }
        return json_obj