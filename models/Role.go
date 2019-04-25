package models

type Role struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Name			string
}