package models

import (
	"time"
	
	_ "github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Bloc struct {
	ID					int					`gorm:"primary_key";json:"id,omitempty"`
	BlocType			BlocType			`json:"type";gorm:"foreignkey:BlocTypeID"`
	BlocTypeID			int					// FOREIGN KEY
	BlocParamValues		[]BlocParamValue	`json:"params"`
	CreatedAt			*time.Time			`json:"creationDate,omitempty"`
	UpdatedAt			*time.Time			`json:"updateDate,omitempty"`
}